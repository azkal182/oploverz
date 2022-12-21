import { useEffect, useState } from "react";
import cheerio from "cheerio";
import axios from "axios";
import { useLocation } from "react-router";

export default function Bypass() {
  
  const [redirect, setRedirect] = useState("");
  const url = "https://www77.zippyshare.com/v/l3pEuwgX/file.html";
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const foo = useEffect(() => {
    const query = searchParams.get("zippy");

    axios(query).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);

      //console.log($("body").html())
      const dlbutton = $("body")
        .text()
        .match(/href = "([^"]+)" \+ \(([^)]+)\) \+ "([^"]+)/);
      //console.log(dlbutton[0])
      const folder = dlbutton[1];
      //const mathChall = dlbutton[2]
      const filename = dlbutton[3];
      const mathChall = eval(dlbutton[2]);
      console.log(
        `${query.match(/https?:\/\/[^/]+/)[0]}${folder}${mathChall}${filename}`
      );
      setRedirect(
        `${query.match(/https?:\/\/[^/]+/)[0]}${folder}${mathChall}${filename}`
      );
    });
  }, []);

  return (
    <>
      <div className="w-full mx-auto justify-center text-center">
        {" "}
        <button className="mx-auto bg-blue-500 py-2 px-4 mt-8">
          {" "}
          <a href={redirect}>Download</a>{" "}
        </button>{" "}
      </div>
    </>
  );
}
