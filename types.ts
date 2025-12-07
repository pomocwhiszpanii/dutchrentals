export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  zipcode: string;
  price: number;
  description: string;
  specs: {
    sqm: number;
    rooms: number;
    furnished: boolean;
  };
  images: string[];
}

export enum SelectionStep {
  FORM = 'FORM',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT'
}

export interface FormData {
  fullName: string;
  email: string;
  income: number;
  currentZip: string;
  livingSituation: 'single' | 'couple' | 'family';
  isStudent: boolean;
  hasGuarantor: boolean;
  hasPets: boolean;
}