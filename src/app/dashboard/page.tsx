import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div>
        <Image
          src="/dashboard_banner.svg"
          width={800}
          height={200}
          alt="Picture of the author"
          className="mx-auto w-full rounded-lg"
        />
      </div>
      <h1 className="py-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit rem
        eaque. Hic exercitationem odio eaque animi architecto doloribus, sit
        unde deserunt nemo, quis quia. Quas accusantium molestias aspernatur ab.
      </h1>
    </div>
  );
};

export default Dashboard;
