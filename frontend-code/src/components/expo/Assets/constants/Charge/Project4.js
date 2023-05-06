// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './p4.jpg'

const project4 = {
    id: 4,
    oneline:
        "A 64-point Fourier transform chip for high-speed wireless LAN application using OFDM",
    // copy the abstract here
    logo: logo,
    name: "Implementation of FFT chip for OFDM based WLAN", // replace the name here
    imgUrl: [],
    members: [
        "Rahul Gaikwad", "Madhunala Nikhil", "Akash", "Prabhanshu", "Arjun"
    ], // add both mentors and mentees here, each name has to under quotes
    description: {
        aim: (
            <div>
                A 64-point Fourier transform chip for high-speed wireless LAN application using OFDM
            </div>
        ),
        des: (
            <div>
                we present a 64-point FFT/IFFT processor developed primarily for the application in an OFDM-based IEEE 802.11a wireless LAN baseband processor. The 64-point FFT is realized by decomposing it into a two-dimensional structure of 8-point FFTs. This approach reduces the number of required complex multiplications compared to the conventional radix-2 64-point FFT algorithm.
            </div>
        ),
        res: (
            <div style={{ paddingBottom: "2%", display: "flex", alignItems:"center",justifyContent:"center" }}>
                {/* Find the report of the project here, click  on the three dots at the top right, Open in New Window, click on the three dots again and then again go to Embed Item */ }
                <iframe src="https://drive.google.com/file/d/1pSeSG7FwNCEU5IyT1euIDSnlNCuFKb-O/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        )
    },
};
export default project4;
