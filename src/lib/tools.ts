import type { ComponentType, SVGProps } from 'react';
import {
  CompressIcon,
  HashIcon,
  ImageIcon,
  MergeIcon,
  PdfDocIcon,
  RotateIcon,
  SplitIcon,
  TrashIcon,
  WatermarkIcon,
} from '../components/icons';

export type ToolCategory = 'organize' | 'convert' | 'edit' | 'optimize';

export interface ToolDefinition {
  slug: string;
  name: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  category: ToolCategory;
}

export const CATEGORY_STYLES: Record<ToolCategory, { label: string; badge: string; icon: string }> = {
  organize: { label: 'Organize', badge: 'bg-blue-50 text-blue-700 ring-blue-600/10', icon: 'from-blue-500 to-blue-600' },
  edit: { label: 'Edit', badge: 'bg-violet-50 text-violet-700 ring-violet-600/10', icon: 'from-violet-500 to-violet-600' },
  optimize: {
    label: 'Optimize',
    badge: 'bg-amber-50 text-amber-700 ring-amber-600/10',
    icon: 'from-amber-500 to-amber-600',
  },
  convert: {
    label: 'Convert',
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-600/10',
    icon: 'from-emerald-500 to-emerald-600',
  },
};

export const TOOLS: ToolDefinition[] = [
  {
    slug: 'merge-pdf',
    name: 'Merge PDF',
    description: 'Combine multiple PDFs into a single document, in the order you choose.',
    icon: MergeIcon,
    category: 'organize',
  },
  {
    slug: 'split-pdf',
    name: 'Split PDF',
    description: 'Extract a page range or break a PDF into one file per page.',
    icon: SplitIcon,
    category: 'organize',
  },
  {
    slug: 'delete-pages',
    name: 'Remove Pages',
    description: 'Delete unwanted pages from a PDF document.',
    icon: TrashIcon,
    category: 'organize',
  },
  {
    slug: 'rotate-pdf',
    name: 'Rotate PDF',
    description: 'Rotate every page 90, 180 or 270 degrees.',
    icon: RotateIcon,
    category: 'edit',
  },
  {
    slug: 'compress-pdf',
    name: 'Compress PDF',
    description: 'Shrink file size for faster sharing and uploads.',
    icon: CompressIcon,
    category: 'optimize',
  },
  {
    slug: 'watermark-pdf',
    name: 'Add Watermark',
    description: 'Stamp a custom text watermark across every page.',
    icon: WatermarkIcon,
    category: 'edit',
  },
  {
    slug: 'page-numbers',
    name: 'Add Page Numbers',
    description: 'Insert page X of N numbering at the bottom of every page.',
    icon: HashIcon,
    category: 'edit',
  },
  {
    slug: 'images-to-pdf',
    name: 'Images to PDF',
    description: 'Convert JPG or PNG images into a single PDF file.',
    icon: ImageIcon,
    category: 'convert',
  },
  {
    slug: 'pdf-to-images',
    name: 'PDF to Images',
    description: 'Export every PDF page as a PNG or JPG image.',
    icon: PdfDocIcon,
    category: 'convert',
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((tool) => tool.slug === slug);
}
