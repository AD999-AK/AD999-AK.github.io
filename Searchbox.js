import React from 'react';
const Searchbox=({serachfield,searchChange})=>{
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--blue bg-lightest-blue'
		type='search' 
		placeholder='search robot'
		onChange={searchChange}/>
		</div>
		);

}
export default Searchbox;