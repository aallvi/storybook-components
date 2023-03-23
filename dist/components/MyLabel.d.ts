/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * El texto a renderizar
     */
    label: string;
    /**
     * tamano de la letra
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Capitalizado
   */
    allCaps: boolean;
    /**
   * Color
   */
    color?: 'text-primary' | 'text-secondary' | 'text-terciary';
    /**
     * Color del boton custom
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
