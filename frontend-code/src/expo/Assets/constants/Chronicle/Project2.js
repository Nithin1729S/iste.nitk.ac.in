import image from "../../Podcast.png";
export default {
    id: 2,
    tags: ["Podcasts"],
    oneline:
        "The ISTE's Late Night Podcast is a light-hearted take on the world-famous Late Night Show format, hosted by the members of ISTE Chronicle in the form of a podcast. It is filled with various segments offering a hilarious view of an otherwise hectic life of an engineering student.",
    name: "Podcast",
    logo:
        "https://i.ytimg.com/vi/ghncaMrKq6w/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAAqzdow9jh60w4fFl_FzlzNOQNQw",
    imgUrl: [],
    members: [
        "Aswin",
        "Amodh",
        "Varun R",
        "Anshuman",
        "Neha",
        "Annette",
        "Anuja",
        "Shubhang",
        "Nitya",
        "Joshitha",
        "Pratik",
        "Vitthal",
        "Susmita",
        "Dwija",
        "Sam",
        "Bhajan",
        "Sahana",
        "Mihir",
        "Aditya Santosh",
    ],
    description: {
        aim: (
            <div>
                The ISTE's Late Night Podcast is a light-hearted take on the
                world-famous Late Night Show format, hosted by the members of
                ISTE Chronicle in the form of a podcast. It is filled with
                various segments offering a hilarious view of an otherwise
                hectic life of an engineering student.
            </div>
        ),
        meth: (
            <div>
                Monologue <br />
                The monologue in the beginning of the podcast, delivered by our
                host anshuman, takes the listener on a journey back in time to
                life (through the nostalgia bus of course) before covid-19 hit
                our campus. Simple but profound, the monologue is meant to
                elicit the yearning we all share to get back to campus.
                <br />
                <br />
                Interview
                <br />
                The interview with two of our guests, Aditi Bhat and Misria
                Shaik Ali brings discussions and solutions to the forefront
                addressing sustainable lifestyle choices, major pressing
                environmental concerns, ground level solutions and a lot more.
                <br />
                <br />
                Review <br />
                The ISTE review is focused on the topic of “club recruitments''
                and all the chaos that comes along with it. We try to look at
                the funny side as we talk about all the experiences in that 3
                week period from the point of views of both the recruiters as
                well as the applicants.
                <br />
                <br />
                Quarantine with sam
                <br />
                The first of our 2 new segments for this episode, the listeners
                are treated to snippets from the audio logs of ISTE’s Sam Sabu,
                who spent the entire lockdown period on campus! This segment
                puts to rest any theories one might have had about life in NITK
                during lockdown. <br />
                <br />
                Jackie’s shayaris
                <br />
                What happens when you cross some wonderful writing (in multiple
                languages) with google translate? That’s what we test in this
                segment! Let’s see if google translate can keep up with the
                creative use of language by our in house shayari writer Jackie.{" "}
                <br />
                <br />
                Poster
                <br />
                <img src={image} width="300" height="300"></img>
            </div>
        ),
        res: (
            <div>
                Links
                <br />
                <a
                    style={{ color: "blue" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://open.spotify.com/show/4f4gPnICvdobOgfApEJTA1"
                >
                    Spotify -
                    https://open.spotify.com/show/4f4gPnICvdobOgfApEJTA1
                </a>
                <br />
                <a
                    style={{ color: "blue" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=g0qPeHX8iaw"
                >
                    YouTube - https://www.youtube.com/watch?v=g0qPeHX8iaw
                </a>
            </div>
        ),
        con: (
            <div>We'll be back next year with a bang and more podcasts!!!</div>
        ),
    },
    //meetLink: 'This is the meet link',
};
