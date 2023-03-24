import React from 'react';

function RefreshButton() {
  const handleClick = () => {
    window.location.reload();
  }

  return (
    <button className='refreshButton' onClick={handleClick}>
      Refresh
    </button>
  );
}

export default RefreshButton;