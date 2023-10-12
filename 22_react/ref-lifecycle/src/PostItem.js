import React from 'react';

export default function PostItem({ state }) {
  // console.log(state);
  return (
    <div className='itemContainer'>
      {state.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {state.map((state) => {
            return (
              <div key={state.id}>
                No. {state.id} - {state.title}
                <br></br>
                {state.body}
                <br></br>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
