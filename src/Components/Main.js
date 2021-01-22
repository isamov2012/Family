import Form from "./Form";
import Table from "./Table";

const Main = () => {
  return (
    <div id="main">
      <Table />
      <br />
      <br />
      <h3 className="important">
        <u>Family in words.</u>
      </h3>
      <p>
        Isam Hakmi's family consists now of{" "}
        <a href="index.html">four members</a>, we can say it started{" "}
        <b>twelve years </b>ago as Isam and Tanya met then in Ukraine during{" "}
        <em>isam and Tanya's</em> studies in Kharkov city. The relation has been{" "}
        <big>crowned </big>by the first daughter <u>Melika</u> in the year of
        2016. The latest version of the family was published in 2019 with
        newborn Adam.
      </p>
      <br />
      <br />
      <div className="video-pic-form">
        <div className="img-span">
          <video
            src="images/20200410_134921.mp4"
            width="150"
            height="250"
            type="video/mp4"
            controls
          ></video>
          <br />
          <br />
          <br />
          <span>Spring Grill.First grill of the year 2020.</span>
          <br />
          <br />
        </div>
        <Form />
        <img src="images/index.jpg" alt="" id="love-family" />
        <img src="images/newFam.jpg" id="newFam" alt="new" />
      </div>
    </div>
  );
};

export default Main;
