export default {
    id: 4,
    tags: ["Web Application", " Security", " Honeypot"],
    oneline:
        "Understand and document the codebase of SNARE and TANNER.Try to fix the issues present in the application. Optimisation of TANNER",
    logo:
        "https://cyberhoot.com/wp-content/uploads/2020/02/Honeypot-Structure.png",
    name: "Python web application honey pot",
    imgUrl: [
        "https://drive.google.com/file/d/1_31qRIpjcY4QMpz-SWamw_fYg6PWJxB2/preview",
    ],
    members: [
        "Aditya Jain",
        "Aniruddh Sujish",
        "Bhaskar Kataria",
        "Mohammed Rushad",
        "Nihar K G Rai",
        "Balajinaidu V",
        "M S Raghav Ganesh",
        "Rahul Maheshwari",
        "R Raghavendra",
        "Reshma Tresa Antony",
        "Shriroop Roychoudhury",
    ],
    description: {
        aim: (
            <div>
                ● Understand and document the codebase of SNARE and TANNER
                <br /> ● Try to fix the issues present in the application
                <br /> ● Optimisation of TANNER
            </div>
        ),
        meth: (
            <div>
                Honeypots are sacrificial systems that we use to trap intruders.
                They were invented in the early 90s to study attackers in the
                real world. Dummy, unsecured systems were secretly placed on the
                web, and attackers were not stopped from breaking in. Once
                attackers broke in, however, their activity was monitored
                closely. That gave us a wealth of information about black hats
                during the last decade.
                <br />
                <br />
                This is exactly what is achieved using the SNARE (Super Next
                generation Advanced Reactive honEypot : it is a web application
                honeypot which has the ability to convert existing web pages
                into attack surfaces with TANNER) and TANNER (A remote data
                analysis and classification service, to evaluate HTTP requests
                and composing the response then served by SNARE).
                <br />
                <br />
                So, we began by setting up the environment for the project, that
                is downloading the necessary applications in either WSL/Dual
                booted system, by following a few steps available on the SNARE
                and TANNER github page. Next step was to learn the codebase to
                understand the control flow of the application, so that, for
                example, we could identify the reason for a particular issue.
                Then we documented all our newly gained knowledge about the
                code.
                <br />
                <br />
                Then it was all about recreating and identifying issues in the
                application and coming up with patches to resolve those issues.
                <br />
            </div>
        ),
        res: (
            <div>
                We came across 3 issues and understanding the codebase is what
                allowed us to try and rectify those issues.
                <br />
                <ol>
                    <li>
                        Keyboard interrupt in SNARE : While trying to exit
                        SNARE, it wouldn’t happen gracefully. A keyboard
                        interrupt error message would be displayed. But, we
                        observed that when the auto-update parameter was
                        mentioned, with the value being True/False, while
                        starting up SNARE, the issue is solved.
                    </li>
                    <li>
                        Unidentified SQLI attacks : After running quite a lot of
                        test cases, we observed that when SQLI attacks, except
                        for union ones, TannerAPI wouldn’t identify the attack
                        type as SQLI unlike the logs.
                    </li>
                    <li>
                        Inconsistency in sess_uuid : We observed that in the
                        logs, the sess_uuid field was stored with dashes in
                        between, but in TannerAPI and TannerWeb it was stored
                        without dashes. In the URL, sess_uuid can’t have any
                        dashes in between, so we are forced to assume that in
                        the logs, it isn’t so for better readability.
                    </li>
                </ol>
            </div>
        ),
        con: (
            <div>
                Honeypots are great for intrusion detection. They can be
                deployed on unused IP addresses in production networks. Since
                the honeypot has no legitimate purpose, any traffic to the
                honeypot is suspicious and signals the presence of an attacker.
                An intruder who triggers the honeypot can be tracked closely.
                Unlike traditional detection systems that had to spot attacks
                from the flood of normal traffic, all traffic honeypots receive
                are illegitimate.
                <br />
                <br />
                As this is an open source project, we aim to keep working on it;
                to continue recording and resolving issues that come along the
                way.
            </div>
        ),
    },
    //meetLink: 'This is the meet link',
};
