export default {
    id: 4,
    name: "Wireless Solar charger",
    tags: [
        "power electronics",
        " mppt",
        " greenenergy",
        "Lithium ion cell",
        "Charge controller",
    ],
    oneline:
        "To build a 10W portable, wireless solar lithium-ion battery charger. To harness maximum solar energy output, achieve MPPT(Max Power Point Tracking) and charge 8.4V lithium ion cells.",
    logo:
        "https://w0.pngwave.com/png/414/632/solar-panels-solar-power-voltaic-system-solar-energy-voltaics-solar-inverter-png-clip-art-thumbnail.png",
    imgUrl: [
        "https://drive.google.com/file/d/1Ktt7061k5CtmltDpJkWEu9pXEPpT785V/preview",
        "https://drive.google.com/file/d/1kbAaInOYkjIlmnZRbArNxZnYoAexDxFt/preview",
        "https://drive.google.com/file/d/1vDUZ3cCXG8aTbqZwjpEpzi3fw6t1OquT/preview",
        "https://drive.google.com/file/d/1kweJQLZeS9kHct7mFl8me0ABJlG0FlOk/preview",
        "https://drive.google.com/file/d/1TgT_hsuqerjQWJnRmnwasET-lA6pYpvd/preview",
        "https://drive.google.com/file/d/1ojs_-6t9h1ITFE4IkEd8ZNJZV8qWbs5p/preview",
        "https://drive.google.com/file/d/1W7ai43hMkHnzHiqNFjdJSbFKDpEeCAG4/preview",
        "https://drive.google.com/file/d/1nUIQPSwmJTC-pQR_eihdd1r9pvG2YKbh/preview",
        "https://drive.google.com/file/d/1Pl2Lj1mfnXlfHFuQK8CG2guwEHD9Z-Pa/preview",
        "https://drive.google.com/file/d/1sPf5RjFcSPWK5TYFgX1edA-RxBj5pIQ8/preview",
        "https://drive.google.com/file/d/1SE8dyfrmwOy3pYRh75iCZ8ToSuSbC35f/preview",
    ],
    members: [
        "Prabhansh Pandey",
        "Majji Soma Varun",
        "Nihal",
        "Fouzan tinwala",
        "Amogh Manikkuwar",
        "Nisarg",
        "Keesara Vennela",
        "Fidha Palamthalakkal",
    ],
    description: {
        aim: (
            <div>
                To build a 10W portable, wireless solar lithium-ion battery
                charger. To harness maximum solar energy output, achieve
                MPPT(Max Power Point Tracking) and charge 8.4V lithium ion
                cells.
            </div>
        ),
        meth: (
            <div>
                The project was divided into various blocks -
                <ol>
                    <li>Solar Panel</li>
                    <li>MPPT tracker and Controller Block</li>
                    <li>Transmitter block and Inverter</li>
                    <li>Reciever block and Rectifier</li>
                    <li>
                        CCCV (Constant Current Constant Voltage) Battery Charger
                        Block
                    </li>
                </ol>
                <em>
                    The Main Aim of this project was to build a 10 Watt
                    Portable, Solar, Wireless Lithium Ion Charger.
                </em>{" "}
                <br />
                To achieve this, we took the following steps:-
                <ol>
                    <li>Achieve Maximum Power Point Tracking</li>
                    <li>Implement Wireless Transmitter and Receiver</li>
                    <li>
                        Implement CCCV (Constant Current - Constant Voltage)
                        Battery Charging
                    </li>
                </ol>{" "}
                <br />
                The project was divided into various blocks - solar panel, mpp
                tracker and controller block, transmitter block, reciever block
                and finally the CCCV (Constant Current Constant Voltage) battery
                charger block. A 10W Solar panel of short circuit current of
                0.6A and open circuit voltage of 22V was chosen. The mppt
                tracker was using a buck converter. The microcontroller -
                ATMEGA328P was used to provide control signals to the MPP
                tracker and own signals for the transmitter. <br />
                The DC was converted to AC using an inverter and tansmission of
                power was achieved using a series RLC circuit. The receiver
                block consisted of a coil for receiving power and a rectifier in
                the next stage. The battery controller circuit ensures a
                constant charging current of 1A till the li-ion battery voltage
                reaches 8.4V and thereafter the battery is charged while
                maintaining a constant voltage of 8.4V across it. <br />
                Solar Panel : We are using a 10 Watt solar panel with mppt
                current of 0.7amp and 20 voltage.
            </div>
        ),
        res: (
            <div>
                We performed a full Wireless solar charger model simulation in
                Simulink.
                <iframe
                    src="https://drive.google.com/file/d/1TgT_hsuqerjQWJnRmnwasET-lA6pYpvd/preview"
                    width="640"
                    height="480"
                ></iframe>
                <br />
                Here Yellow colour line represents the input power which slowly
                get saturated to 10 watt and blue colour line represents output
                power which saturates to 8.5 watt.
                <iframe
                    src="https://drive.google.com/file/d/1ojs_-6t9h1ITFE4IkEd8ZNJZV8qWbs5p/preview"
                    width="640"
                    height="480"
                ></iframe>
                <br />
                In the below figure yellow plot represents the output voltage
                received at receiver side which is oscillating at a frequency of
                20kHz due to inverter in transmitter side.Blue line represents
                the output voltage of batter which is 8.4 Volt.
                <iframe
                    src="https://drive.google.com/file/d/1W7ai43hMkHnzHiqNFjdJSbFKDpEeCAG4/preview"
                    width="640"
                    height="480"
                ></iframe>
                <br />
            </div>
        ),

        con: <div>The Result is also the Conclusion.</div>,
    },
    //meetLink: 'This is the meet link',
};
