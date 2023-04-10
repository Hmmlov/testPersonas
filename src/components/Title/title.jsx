import React from 'react'

const Title = ({title, category}) => {

    const handleClick = (event) => {
        event.preventDefault();
      }

  return (
    <div className="row">
            <div className="col-12">
               <div className="page-title-box">
                  <div className="page-title-right">
                     <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href="#" onClick={handleClick}>3CEDU</a></li>
                        <li className="breadcrumb-item"><a href="#" onClick={handleClick}>{category}</a></li>
                        <li className="breadcrumb-item active">{title}</li>
                     </ol>
                  </div>
                  <h4 className="page-title">{title}</h4>
               </div>
            </div>
         </div>
  )
}


export default Title