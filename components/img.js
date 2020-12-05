export default function Img() {
  return (
    <>
      <img src="img1.jpeg"></img>
      <style jsx>{`
        img {
          height: 100vh;
          width: 40%;
        }
        @media screen and (max-width: 1000px) {
          img {
            height: 100vh;
            width: 60%;
          }
        }
        @media screen and (max-width: 550px) {
          img {
            height: 100vh;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
