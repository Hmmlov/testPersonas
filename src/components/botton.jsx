import React from 'react'

const botton = ({id, action}) => {
    $(document).on('click', id, function () {
        action
      });
      
  return (
    <>

    </>
  )
}

export default botton
