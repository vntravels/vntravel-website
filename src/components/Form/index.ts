import dynamic from 'next/dynamic';

export const VTAutocomplete = dynamic(() => import('./Autocomplete'));
export const VTDatePicker = dynamic(() => import('./DatePicker'));
export const VTFormInput = dynamic(() => import('./FormInput'));
export const VTSocialButton = dynamic(() => import('./SocialButton'));
export const VTSubmitButton = dynamic(() => import('./SubmitButton'));
export const VTTextField = dynamic(() => import('./TextField'));
