import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import ReactPlayer from "react-player";

import './App.scss';
import {links} from './music-links';


function App() {
    return (
        <div className="App">
            {/*<header className="header">*/}
            {/*</header>*/}
            {/*<div className="main-container">*/}
            <img src={`http://localhost:3000/bgnd.png`}
                 className={"background-beeth"}
                 alt={""}
            />
            <Router>
                <div className={"sidebar"}>
                    <div className={"sidebar-content"}>
                        <img src={window.location.origin + "/ktonal-logo.png"} className="App-logo" alt="logo"/>
                        <Link to={"/what-the-k"} className={"link"}>What the k?</Link>
                        <Link to={"/code"} className={"link"}>Code</Link>
                        <Link to={"/music"} className={"link"}>Music</Link>
                        <Link to={"/writings"} className={"link"}>Writings</Link>
                        <Link to={"/project-gallery"} className={"link"}>Projects Gallery</Link>
                        <Link to={"/members"} className={"link"}>Members</Link>
                    </div>
                </div>
                <Switch>
                    <div className={"content-container"}>
                        <Route path={"/what-the-k"}>
                            <div>
                                <h2>What's ktonal?</h2>
                                <p>ktonal is a group of composers working on different aspects of AI-powered
                                    music-making.</p>
                                <p>We develop open-source code, write music pieces and we love to reflect the two by
                                    putting our thoughts down in writings.</p>
                                <p>Generally, we're motivated by the idea that technological and aesthetical
                                    developments should always be concerned by each other and
                                    we find great pleasure exploring this relationship within our musical
                                    praxis.</p>
                                <h2>How do you pronounce "ktonal"?</h2>
                                <p>Spell the "k" and then say "tonal" ;)</p>
                                <h2>Why "k"tonal?</h2>
                                <p>
                                    The "k" of ktonal comes from the german word for AI : "Künstlische Intelligenz".
                                    Thus ktonal stands for AI-made music but it is also a wink to "atonal music",
                                    this thing a certain Schönberg claims to have invented and that enjoyed quite a
                                    success
                                    in the classical western tradition of the 20th century...
                                </p>

                            </div>
                        </Route>
                        <Route path={"/code"}>
                            <div>
                                <h2>Code</h2>
                                <p>There's no AI without code!</p>
                                <p>We open-source all the code we develop.</p>

                                <h2>Repositories</h2>
                                <section>You'll find all repos on our <a href={"https://github.com/k-tonal"}>GitHub
                                    page</a>.
                                    <h3><a href={"https://github.com/k-tonal/mimikit"}><code>mimikit</code></a></h3>
                                    <p>python package for making deep generative models with your own
                                        audio files.</p>

                                    <h3><a
                                        href={"https://github.com/k-tonal/mimikit-notebooks"}>the <code>mimikit-notebooks</code></a>
                                    </h3>
                                    <p>set of plug & play notebooks to use mimikit in colab.</p>
                                    <h3><a href={"https://github.com/k-tonal"}><code>axx</code></a></h3>
                                    <p>webapp still in early development to visualize and listen to the
                                            models made with <code>mimikit</code>.</p>
                                </section>
                                <h2>Documentation 🔍</h2>
                                <section>
                                    <b>Coming soon</b>: tutorials and documentation for <code>mimikit</code>!
                                </section>
                            </div>
                        </Route>
                        <Route path={"/music"}>
                            <div>
                                <h2>Music 🎶</h2>
                                <p>You'll find more examples on our <a
                                    href={"https://www.youtube.com/channel/UC_mWCpFGG9xRDbYZMTdwHKw"}>YouTube</a> and <a
                                    href={"https://soundcloud.com/k-tonal"}>SoundCloud</a> channels.</p>
                                <h2>Highlights</h2>
                                <div className={"music-grid"}>
                                    {links.map(link => {
                                        return (
                                            <div key={link.url} className={"embed-player"}>
                                                <ReactPlayer url={link.url}
                                                    // width={"864px"}
                                                    // height={"100%"}
                                                />
                                                <p>{link.description}</p>
                                            </div>)
                                    })}
                                </div>
                            </div>
                        </Route>
                        <Route path={"/writings"}>
                            <div>
                                <h2>Writings</h2>
                                in progress... 👩‍🏭
                            </div>
                        </Route>
                        <Route path={"/project-gallery"}>
                            <div>
                                <h2>Projects</h2>
                                in progress... 👩‍🏭
                            </div>
                        </Route>
                        <Route path={"/members"}>
                            <div>
                                <h2>Members</h2>
                                <div className={"members-list"}>
                                    <p>
                                        Antoine Daurat
                                    </p>
                                    <p>
                                        Björn Erlach
                                    </p>
                                    <p>
                                        Roberto Fausti
                                    </p>
                                    <p>
                                        Genoël Lilienstern
                                    </p>
                                    <p>
                                        Dohi Moon
                                    </p>
                                </div>
                            </div>
                        </Route>
                    </div>
                </Switch>
            </Router>
            {/*</div>*/}
            <footer className={"footer"}>
                {"Copyright 2021 k-tonal"}
            </footer>
        </div>
    )
        ;
}

export default App;
