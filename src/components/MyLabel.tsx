import './mylabel.css'


export interface MyLabelProps{
  /**
   * El texto a renderizar
   */
    label: string;
  /**
   * tamano de la letra
   */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
   * Capitalizado
   */
   allCaps: boolean;
    /**
   * Color
   */
  color?: 'text-primary'|'text-secondary'|'text-terciary';
  /**
   * Color del boton custom
   */
  fontColor?:string
}

export const MyLabel = ({
    label='no Label',
    size='normal',
    allCaps=false,
    color='text-primary',
    fontColor

}:MyLabelProps) => {




  return (
    <span className={`label ${size} ${color} ${allCaps && 'caps' } ` } style={{color:fontColor}} >

       {label}

    </span>
  )
}
