"use client"
import profile from "@/data/profile.json"
import Folder from "@/components/v2/folder";
import { Toolbelt } from "@/components/v2/toolbelt";
import Image from "next/image";
import { useEffect, useState } from "react";



const close = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

const maximize = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>

const minimize = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" /></svg>

const doorLogo = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path d="M96 64c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V448h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H432 144 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96V64zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>

const calculateResponsiveWidth = (width: number) => {
  return width <= 768 ? 70 : width <= 1024 ? 125 : 200;
};

const useResponsiveWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [responsiveWidth, setResponsiveWidth] = useState(calculateResponsiveWidth(screenWidth));

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setResponsiveWidth(calculateResponsiveWidth(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const responsiveWidth = screenWidth <= 768 ? 70 : screenWidth <= 1024 ? 125 : 200; // Adjust breakpoint as needed

  return responsiveWidth;
};



export default function Home() {
  const responsiveWidth = useResponsiveWidth();
  const [personalInfo, setPersonalInfo] = useState(true);

  const togglePersonalInfo = () => setPersonalInfo(!personalInfo)

  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400">
        <div className="mx-6 p-1 flex justify-between">
          <div>
            {Folder({ name: "Personal Information", action: togglePersonalInfo, state: personalInfo })}
          </div>
          <div className="grid grid-flow-col">
            <div>
              {Folder({ name: "Experience" })}
            </div>
            <div>
              {Folder({ name: "Projects and Interest" })}
              {Folder()}
              {Folder()}
            </div>
          </div>
        </div>
        {
          personalInfo ?

            <div className="bg-slate-300 absolute left-10 right-10 sm:left-24 sm:right-24 md:left-30 md:right-30 lg:left-44 lg:right-44 xl:left-52 xl:right-52 2xl:left-72 2xl:right-72 top-32 bottom-40 max-lg:bottom-15 max-xl:bottom-20 rounded-sm shadow-lg">
              <div className="mt-3">
                <div className="absolute right-0 left-0 text-center text-black/50 font-medium max-sm:hidden">Personal Information</div>
                <div className="grid grid-flow-col gap-2 absolute right-0 mr-3">
                  <div className="bg-green-500 w-4 h-4 rounded-full cursor-pointer" />
                  <div className="bg-yellow-500 w-4 h-4 rounded-full cursor-pointer" />
                  <div className="bg-red-500 w-4 h-4 rounded-full cursor-pointer" onClick={() => { togglePersonalInfo() }} />
                </div>
              </div>
              <div>
                <div className="bg-slate-800 m-3 absolute bottom-0 top-8 left-0 right-0 rounded-sm p-4 text-white/80">
                  <div className="grid grid-cols-4 max-lg:grid-cols-1 justify-items-center max-md:mt-2 max-xl:mt-6 mt-8 gap-4">
                    <div className=" grid grid-cols-3 lg:grid-cols-1">
                      <Image
                        src={"/images/MCSkin.png"}
                        height={100}
                        width={responsiveWidth}
                        alt={"Avatar model"}
                        className={`transition-all duration-700 flex `}
                      />
                      {/* {responsiveWidth ? <div>Loaded {responsiveWidth}</div> : <div>Loading {responsiveWidth}</div>} */}
                      <div className="m-2 col-span-2 lg:hidden">
                        <div className="text-sm lg:text-xl font-semibold text-white/80">{profile.position}</div>
                        <div className="text-xl max-md:hidden">{profile.name.first} • {profile.location.city}, {profile.location.country}</div>
                        <div className="md:hidden">
                          <div className="text-xl">{profile.name.first}</div>
                          <div className="text-sm">{profile.location.city}, {profile.location.country}</div>
                        </div>
                      </div>
                    </div>
                    {/* <img src="/images/MCSkin.png" className="scale-50"></img> */}
                    <div className="col-span-3">
                      <div>
                        <div className="m-2 max-lg:hidden">
                          <div className="text-xl font-semibold text-white/80">{profile.position}</div>
                          <div className="text-xl ">{profile.name.first} • {profile.location.city}, {profile.location.country}</div>
                        </div>
                        <Toolbelt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : null
        }
        <div className=" bg-gradient-to-l from-pink-400 via-purple-400 to-cyan-400 outline outline-white/10  w-full h-14 fixed bottom-0 flex justify-center items-center">
          <div className="rounded-full bg-white/30 hover:bg-white/50 w-fit p-2 cursor-pointer hover:ring-2 ring-1 ring-black/20 transition-all ease-in-out duration-300">
            {doorLogo}
          </div>
        </div>
      </div>

    </main>
  );
}
