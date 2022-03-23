import React, { Fragment } from "react";
import IntroPost from "../components/IntroPost";
import Pill from "../components/Pill";
import Post from "../components/Post";

const Landing = () => {
  return (
    <Fragment>
      <div className="flex justify-center gap-4 mt-12 w-3/5 m-auto flex-wrap">
        <Pill pillTitle={"Faith"} />
        <Pill pillTitle={"Apologetics"} />
        <Pill pillTitle={"Theology"} />
        <Pill pillTitle={"Tech"} />
        <Pill pillTitle={"Sports"} />
      </div>
      <div className="flex mt-12 gap-8 px-5 sm:px-8 md:px-14 lg:px-32">
        <IntroPost />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 px-5 sm:px-8 md:px-14 lg:px-32">
        <Post
          url={"/did-god-harden-pharaohs-heart"}
          imageCover="https://images.pexels.com/photos/7478445/pexels-photo-7478445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          postTitle={"Did God harden Pharaoh's heart?"}
          postCategory="faith"
        />
        <Post
          url={"/did-jesus-rise-from-the-dead"}
          imageCover="https://images.pexels.com/photos/1007425/pexels-photo-1007425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          postTitle={"Did Jesus rise from the dead?"}
          postCategory="faith"
        />
        <Post
          url={"/an-exegesis-on-1-john-1-vs-9"}
          imageCover="https://images.pexels.com/photos/6860819/pexels-photo-6860819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          postTitle={"An Exegesis on 1 John 1:9"}
          postCategory="faith"
        />
        <Post
          url={"/a-biblical-defense-on-speaking-in-tongues"}
          imageCover="https://images.unsplash.com/photo-1514286969571-5142af56b991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2h1cmNoJTIwcHJheWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          postTitle={"A Biblical Defense on Speaking in Tongues"}
          postCategory="faith"
        />
      </div>
    </Fragment>
  );
};

export default Landing;
