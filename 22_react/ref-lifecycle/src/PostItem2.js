export default function PostItem2({ state }) {
  console.log(state);
  return (
    <div>
      {state.length < 1 ? (
        <h3>로딩중..</h3>
      ) : (
        state.map((state) => {
          return (
            <ul>
              <li key={state.id}>
                Ni.{state.id}
                <br></br>
                {state.title}
              </li>
            </ul>
          );
        })
      )}
    </div>
  );
}
