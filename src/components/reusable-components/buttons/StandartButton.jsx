import React from 'react';

function StandartButton({ title = "Standart Button", onClick = null, color = "primary", size = null }) {

  let colorClass = '';
  let buttonSizeClass ="";
  switch (color) {
    case 'first':
      colorClass = 'bg-blue-500 hover:bg-blue-700 text-white';
      break;
    case 'second':
      colorClass = 'bg-gray-500 hover:bg-gray-700 text-white';
      break;
    case 'succ':
      colorClass = 'bg-green-500 hover:bg-green-700 text-white';
      break;
    case 'dang':
      colorClass = 'bg-red-500 hover:bg-red-700 text-white';
      break;
    default:
      colorClass = 'bg-blue-500 hover:bg-blue-700 text-white';
  }
  // Button Size

  switch (size) {
    case "small":
        buttonSizeClass = "w-1/4";
        break;
    case "medium":
        buttonSizeClass = "w-1/3";   
        break;
    case "large":
        buttonSizeClass = "w-1/2";   
        break;
    case "fullsize":
        buttonSizeClass = "w-full";  
        break;    
    default:
        break;
  }


  return (
    <button
      className={`px-4 py-2 rounded ${buttonSizeClass} ${colorClass}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default StandartButton;