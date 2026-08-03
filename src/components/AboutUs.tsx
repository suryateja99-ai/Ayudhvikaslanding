import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import chiefAdvisorImage from '../assets/images/about-chief-advisor.jpg';
import directorsImage from '../assets/images/about-directors.jpg';

GlobalWorkerOptions.workerSrc = pdfWorker;

const aboutImages = [
  { src: directorsImage, alt: 'Ayudh Vikas directors' },
  { src: chiefAdvisorImage, alt: 'Dr. V. Ravinder, Chief Advisor at Ayudh Vikas' },
];

const Flipbook: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');

  useEffect(() => {
    let disposed = false;
    const loadingTask = getDocument({ url: `${import.meta.env.BASE_URL}about-us-brochure.pdf` });

    loadingTask.promise
      .then((pdf) => {
        if (disposed) return;
        pdfRef.current = pdf;
        setPageCount(pdf.numPages);
        setIsLoading(false);
      })
      .catch(() => {
        if (!disposed) setIsLoading(false);
      });

    return () => {
      disposed = true;
      loadingTask.destroy();
    };
  }, []);

  useEffect(() => {
    const renderPage = async () => {
      const pdf = pdfRef.current;
      const canvas = canvasRef.current;
      const stage = stageRef.current;
      if (!pdf || !canvas || !stage) return;

      const page = await pdf.getPage(pageNumber);
      const originalViewport = page.getViewport({ scale: 1 });
      const availableWidth = Math.min(stage.clientWidth - 24, 1100);
      const availableHeight = Math.max(360, window.innerHeight * 0.78);
      const scale = Math.min(availableWidth / originalViewport.width, availableHeight / originalViewport.height);
      const viewport = page.getViewport({ scale });
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width = Math.floor(viewport.width * pixelRatio);
      canvas.height = Math.floor(viewport.height * pixelRatio);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;
      await page.render({ canvas, canvasContext: context, viewport, transform: [pixelRatio, 0, 0, pixelRatio, 0, 0] }).promise;
    };

    renderPage();
    const resizeObserver = new ResizeObserver(renderPage);
    if (stageRef.current) resizeObserver.observe(stageRef.current);
    return () => resizeObserver.disconnect();
  }, [pageNumber, pageCount]);

  const changePage = (nextPage: number) => {
    setDirection(nextPage > pageNumber ? 'next' : 'previous');
    setPageNumber(nextPage);
  };

  return (
    <section className="bg-slate-900 px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
          <BookOpen className="h-4 w-4" /> Company Profile
        </div>
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Explore our story</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">Turn through the pages of our company profile to learn more about Ayudh Vikas.</p>

        <div ref={stageRef} className="mt-8 flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-800/70 p-3 shadow-2xl sm:p-6">
          {isLoading ? (
            <div className="text-sm font-semibold text-slate-300">Loading company profile…</div>
          ) : pageCount ? (
            <div key={pageNumber} className={`flipbook-page flipbook-page--${direction} relative bg-white shadow-2xl`}>
              <canvas ref={canvasRef} aria-label={`Company profile page ${pageNumber} of ${pageCount}`} />
            </div>
          ) : (
            <a className="text-sm font-bold text-amber-300 underline" href={`${import.meta.env.BASE_URL}about-us-brochure.pdf`} target="_blank" rel="noreferrer">Open company profile PDF</a>
          )}
        </div>

        {pageCount > 0 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => changePage(pageNumber - 1)} disabled={pageNumber === 1} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35">
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <span className="min-w-24 text-sm font-bold text-slate-300">Page {pageNumber} / {pageCount}</span>
            <button onClick={() => changePage(pageNumber + 1)} disabled={pageNumber === pageCount} className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-35">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export const AboutUs: React.FC = () => (
  <>
    <section className="bg-slate-950">
      {aboutImages.map((image) => (
        <div key={image.src} className="flex min-h-[calc(100svh-7rem)] w-full items-center justify-center bg-slate-950 p-2 sm:p-4 lg:p-6">
          <img src={image.src} alt={image.alt} className="max-h-[calc(100svh-8rem)] w-auto max-w-full object-contain shadow-2xl" />
        </div>
      ))}
    </section>
    <Flipbook />
  </>
);
