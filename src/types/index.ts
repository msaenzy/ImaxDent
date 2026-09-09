export interface TreatmentItem {
  id: string;
  name: string;
  description: string;
  iconName: 'ortodoncia' | 'resinas' | 'limpieza' | 'protesis' | 'extracciones';
  badge?: string;
  whatsappMessage: string;
}

export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
}

export interface CompanyValueItem {
  id: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  placeholderText: string;
  slotNumber: number;
}

export interface ContactFormData {
  name: string;
  service: string;
  preferredTime: string;
}
