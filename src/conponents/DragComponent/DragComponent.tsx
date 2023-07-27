import './DragComponent.css';

const DragComponent: React.FC<{ name: string }> = (props) => {
  
  const random_rgba = ()=> {
    const o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      r().toFixed(1) +
      ')'
    );
  }

  const onMouseOverHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.borderColor = 'red';
  };

  const onMouseOutHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.borderColor = '#ccc';
  };

  const onDragStartHandeler = (e: React.DragEvent) => {
    console.log(e.currentTarget);
   };


  return (
    <div
      onMouseOver={(e) => onMouseOverHandler(e)}
      onMouseOut={(e) => onMouseOutHandler(e)}
      className="dragParent"
      style={{ backgroundColor: random_rgba() }}
      draggable
      onDragStart={(e)=>onDragStartHandeler(e)}
    >
      {props.name}
    </div>
  );
};

export default DragComponent;