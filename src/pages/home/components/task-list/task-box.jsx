import React from 'react';
import { TaskBoxStyled } from './styled';


const TaskBox = ({ checked, value, id, toggle, remove }) => {
  
  return (
    <TaskBoxStyled className={`${checked ? "checked" : ""}`}>
      <div id='check'>
        <svg
          role='button'
          onClick={toggle} 
          width="16" 
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Concluir tarefa</title>
          <g id="_Checkbox base/True/False/sm/Checkbox/Default">
          <g id="check">
          <path id="Icon" d="M12 5L6.5 10.5L4 8" stroke={`${checked ? "#32D583" : "#667085" }`} strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
            <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke={`${checked ? "#32D583" : "#667085" }`}/>
          </g>
        </svg>
      </div>
      <p
        onClick={toggle}
        role='button'
        >
        {value}
      </p>
      <div id="close" onClick={remove}>
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16">
        <title>Excluir tarefa</title>
        <rect width="16" height="16" fill="none"/>
        <rect x="7.25" y="1.76" width="1.49" height="12.49" transform="translate(8 -3.31) rotate(45)" fill="#667085"/>
        <rect x="7.25" y="1.76" width="1.49" height="12.49" transform="translate(-3.31 8) rotate(-45)" fill="#667085"/>
      </svg>

      </div>
    </TaskBoxStyled>
  )
}

export default TaskBox