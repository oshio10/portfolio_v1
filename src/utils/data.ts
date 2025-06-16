import cvData from './cv-data.json';
import { CVData } from '@/types/cv';

export function getCVData(): CVData {
  return cvData as CVData;
}
