export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  cover: string;
  gallery?: string[];
  links?: { label: string; url: string }[];
  stats?: { label: string; value: string }[];
  year?: number;
  role?: string;
};
