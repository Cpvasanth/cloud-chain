import React, { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [address, setAddress] = useState("");
  const [images, setImages] = useState([]); // { cid, name }
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setError(null);
    setLoading(true);
    setImages([]);

    try {
      const addrToUse = address.trim() || account;
      if (!addrToUse) {
        setError("No address provided or connected account");
        setLoading(false);
        return;
      }

      const dataArray = await contract.display(addrToUse);
      if (!dataArray || Object.keys(dataArray).length === 0) {
        setError("No images to display for this address.");
        setLoading(false);
        return;
      }

      const rawStrings = dataArray.toString().split(",");

      const cids = rawStrings
        .map((item) => {
          const cidMatch = item.match(/Qm[1-9A-HJ-NP-Za-km-z]{44,}/);
          return cidMatch ? cidMatch[0] : null;
        })
        .filter(Boolean);

      if (cids.length === 0) {
        setError("No valid IPFS hashes found.");
        setLoading(false);
        return;
      }

      // Fetch metadata for each CID
      const imageData = await Promise.all(
        cids.map(async (cid) => {
          try {
            const res = await fetch(`https://gateway.pinata.cloud/ipfs/${cid}`);
            const contentType = res.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
              const metadata = await res.json();
              return { cid, name: metadata.name || `Image - ${cid.slice(0, 6)}...` };
            } else {
              // It's a raw file (e.g., image), no JSON metadata
              return { cid, name: `Image - ${cid.slice(0, 6)}...` };
            }
          } catch (err) {
            return { cid, name: `Image - ${cid.slice(0, 6)}...` };
          }
        })
      );

      setImages(imageData);
    } catch (e) {
      console.error(e);
      setError("Error fetching data. You may not have access.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="display-container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Address (optional)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="address"
        />
        <button className="center button" onClick={getData} disabled={loading}>
          {loading ? "Loading..." : "Get Data"}
        </button>
      </div>

      {error && <div className="error-message" style={{ color: "red", marginTop: "1rem" }}>{error}</div>}

      <div className="image-list" style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {images.length === 0 && !loading && !error && <p>No images to display</p>}

        {images.map((img, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <a
              href={`https://gateway.pinata.cloud/ipfs/${img.cid}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", border: "1px solid #ccc", padding: "5px" }}
            >
              <img
                src={`https://gateway.pinata.cloud/ipfs/${img.cid}`}
                alt={img.name}
                title={img.name}
                style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover" }}
                className="image-list"
              />
            </a>
            <div style={{ marginTop: "5px", fontSize: "14px", wordBreak: "break-all" }}>{img.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;




// import React, { useState } from "react";
// import "./Display.css";

// const Display = ({ contract, account }) => {
//   const [address, setAddress] = useState("");
//   const [imageHashes, setImageHashes] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getData = async () => {
//     setError(null);
//     setLoading(true);
//     setImageHashes([]);

//     try {
//       const addrToUse = address.trim() || account;
//       if (!addrToUse) {
//         setError("No address provided or connected account");
//         setLoading(false);
//         return;
//       }

//       const dataArray = await contract.display(addrToUse);

//       if (!dataArray || Object.keys(dataArray).length === 0) {
//         setError("No images to display for this address.");
//         setLoading(false);
//         return;
//       }

//       // Convert returned data to array of strings (IPFS hashes or URLs)
//       const strArray = dataArray.toString().split(",");

//       // Extract CID from each item using regex
//       const cids = strArray
//         .map((item) => {
//           const match = item.match(/Qm[1-9A-HJ-NP-Za-km-z]{44,}/); // basic CID v0 pattern
//           return match ? match[0] : null;
//         })
//         .filter(Boolean); // remove nulls

//       if (cids.length === 0) {
//         setError("No valid IPFS hashes found.");
//         setLoading(false);
//         return;
//       }

//       setImageHashes(cids);
//     } catch (e) {
//       console.error(e);
//       setError("Error fetching data. You may not have access.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="display-container">
//       <div className="input-section">
//         <input
//           type="text"
//           placeholder="Enter Address (optional)"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           className="address"
//         />
//         <button className="center button" onClick={getData} disabled={loading}>
//           {loading ? "Loading..." : "Get Data"}
//         </button>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       <div className="image-list">
//         {imageHashes.map((cid, index) => (
//           <a
//             href={`https://gateway.pinata.cloud/ipfs/${cid}`}
//             key={index}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={`https://gateway.pinata.cloud/ipfs/${cid}`}
//               alt={`IPFS content ${index + 1}`}
//               className="image-list"
//             />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Display;











// import { useState } from "react";
// import "./Display.css";
// const Display = ({ contract, account }) => {
//   const [data, setData] = useState("");
//   const getdata = async () => {
//     let dataArray;
//     const Otheraddress = document.querySelector(".address").value;
//     try {
//       if (Otheraddress) {
//         dataArray = await contract.display(Otheraddress);
//         console.log(dataArray);
//       } else {
//         dataArray = await contract.display(account);
//       }
//     } catch (e) {
//       alert("You don't have access");
//     }
//     const isEmpty = Object.keys(dataArray).length === 0;

//     if (!isEmpty) {
//       const str = dataArray.toString();
//       const str_array = str.split(",");
//       console.log(str);
//       console.log(str_array);
//       const images = str_array.map((item, i) => {
//         return (
//           <a href={item} key={i} target="_blank">
//             <img
//               key={i}
//               // src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
//               // src={`${item.substring(6)}`}
//               // src={`https://api.pinata.cloud/pinning/pinFileToIPFS`}
//               alt="new"
//               className="image-list"
//             ></img>
//           </a>
//         );
//       });
//       setData(images);
//     } else {
//       alert("No image to display");
//     }
//   };
//   return (
//     <>
//       <div className="image-list">{data}</div>
//       <input
//         type="text"
//         placeholder="Enter Address"
//         className="address"
//       ></input>
//       <button className="center button" onClick={getdata}>
//         Get Data
//       </button>
//     </>
//   );
// };
// export default Display;
