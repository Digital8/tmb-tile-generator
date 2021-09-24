import qs from "qs";

export function App({ pdf, svg }: any) {
  return (
    <>
      <input />
      <img
        src={`https://cdn.make.cm/make/t/ba4c9684-a7af-4ca3-b929-291d6c196be3/k/639f5a8a-3056-48ff-bc67-c7613b9ecdca.b6d6a70ce98c5defcbc0282c9660dbc9/sync?${qs.stringify(
          {
            format: "png",
            customSize: {
              width: "512",
              height: "512",
              unit: "px",
            },
            data: {
              canvas: true,
            },
            fetchedAt: new Date().getTime().toString(),
          }
        )}`}
      />
    </>
  );
  // useEffect(() => {
  //   (async () => {

  //   })();
  // }, []);
  // return (
  //   <>
  //     {pdf ? <img src="./pdf.svg" alt="" /> : null}
  //     {svg ? (
  //       <svg viewBox="0 0 512 512" style={{ width: 512, height: 512 }}>
  //         <text x="50%" y="50%" style={{ fontSize: "72px" }}>
  //           Test
  //         </text>
  //         <rect
  //           x="0"
  //           y="0"
  //           width="512"
  //           height="512"
  //           fill="none"
  //           stroke="hotpink"
  //         ></rect>
  //       </svg>
  //     ) : null}
  //   </>
  // );
}
