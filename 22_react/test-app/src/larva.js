function Larva() {
  return (
    <>
      {/* 애벌레 */}
      <div
        style={{
          position: 'absolute',
          left: '60px',
          top: '310px',
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          borderRadius: '50%',
          zIndex: '2',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: '60px',
          top: '315px',
          width: '10px',
          height: '10px',
          backgroundColor: 'black',
          borderRadius: '50%',
          zIndex: '3',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: '50px',
          top: '300px',
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: '70px',
          top: '330px',
          width: '50px',
          height: '50px',
          backgroundColor: 'aqua',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: '90px',
          top: '350px',
          width: '50px',
          height: '50px',
          backgroundColor: 'skyblue',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: '120px',
          top: '350px',
          width: '50px',
          height: '50px',
          backgroundColor: 'aqua',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: '150px',
          top: '350px',
          width: '50px',
          height: '50px',
          backgroundColor: 'skyblue',
          borderRadius: '50%',
        }}
      ></div>
      <div
        className='imgDiv'
        style={{
          position: 'absolute',
          left: '150px',
          top: '350px',
        }}
      ></div>
    </>
  );
}
export default Larva;
