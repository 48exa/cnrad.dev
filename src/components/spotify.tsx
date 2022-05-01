import { useLanyard } from "use-lanyard";
import styled from "styled-components";
import { motion } from "framer-motion";

export function Spotify() {
    //code inspired by alistair @ github.com/alii, design inspired by phineas @ github.com/Phineas

    const { data: user } = useLanyard("705665813994012695");

    if (!user || !user.spotify) {
        return <></>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{ duration: 1.25, easing: [0, 0.5, 0.28, 0.99] }}
            className="absolute left-8 -bottom-16 w-[20rem] h-[7rem] hidden md:flex flex-col items-start justify-start "
        >
            <h1 className="text-white font-semibold text-base mb-2 flex items-center justify-center">
                Listening to Spotify
                <span className="ml-2 w-2 h-2">
                    <span className="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
                    <span className="absolute w-2 h-2 bg-red-600 rounded-full" />
                </span>
            </h1>

            <div className="w-full h-[6rem] flex flex-row items-center justify-start">
                <img
                    src={user.spotify.album_art_url}
                    className="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none"
                />
                {/* <img
                    src="/assets/spotify-logo.svg"
                    className="absolute -bottom-1 left-[62px] w-6 h-6 rounded-full bg-black border-2 border-black pointer-events-none"
                /> */}
                <div className="w-auto h-full flex flex-col items-start justify-center">
                    <a
                        href={`https://open.spotify.com/track/${user.spotify.track_id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-[#e1eafd]"
                    >
                        {user.spotify.song}
                    </a>
                    <p className="text-[#cad2e0] font-normal text-sm">{user.spotify.artist}</p>
                </div>
            </div>
        </motion.div>
    );
}