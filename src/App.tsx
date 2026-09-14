import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Premium from './pages/Premium';

const MergePdf = lazy(() => import('./pages/tools/MergePdf'));
const SplitPdf = lazy(() => import('./pages/tools/SplitPdf'));
const DeletePages = lazy(() => import('./pages/tools/DeletePages'));
const RotatePdf = lazy(() => import('./pages/tools/RotatePdf'));
const CompressPdf = lazy(() => import('./pages/tools/CompressPdf'));
const WatermarkPdf = lazy(() => import('./pages/tools/WatermarkPdf'));
const PageNumbers = lazy(() => import('./pages/tools/PageNumbers'));
const ImagesToPdf = lazy(() => import('./pages/tools/ImagesToPdf'));
const PdfToImages = lazy(() => import('./pages/tools/PdfToImages'));

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-800">Page not found</h1>
      <p className="mt-2 text-slate-500">The tool you're looking for doesn't exist.</p>
    </div>
  );
}

function ToolFallback() {
  return <div className="mx-auto max-w-6xl px-4 py-16 text-center text-slate-400">Loading tool...</div>;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<ToolFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/tools/merge-pdf" element={<MergePdf />} />
            <Route path="/tools/split-pdf" element={<SplitPdf />} />
            <Route path="/tools/delete-pages" element={<DeletePages />} />
            <Route path="/tools/rotate-pdf" element={<RotatePdf />} />
            <Route path="/tools/compress-pdf" element={<CompressPdf />} />
            <Route path="/tools/watermark-pdf" element={<WatermarkPdf />} />
            <Route path="/tools/page-numbers" element={<PageNumbers />} />
            <Route path="/tools/images-to-pdf" element={<ImagesToPdf />} />
            <Route path="/tools/pdf-to-images" element={<PdfToImages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
