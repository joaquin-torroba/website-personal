export interface Project {
  id: number;
  name: string;
  logo?: string;
  year?: string;
  status?: string;
  description?: string;
  tools?: string[];
}

export const projectsData: Project[] = [
  { id: 1, name: 'ONCE' },
  { id: 2, name: 'DIMEXON' },
  { id: 3, name: 'CULTIONS' },
  { id: 4, name: 'CANNMED E-commerce CBD' },
  { id: 5, name: 'Crypto Job Board' },
  { id: 6, name: 'Mis Copilotos' },
  { id: 7, name: 'Video Insight Pro' },
  { id: 8, name: 'Framesynth' },
]; 