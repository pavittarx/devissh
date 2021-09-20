import { useState, useEffect } from "react";
import Head from "next/head";

import Header from "@/_shared/Header";
import TextInput from "@/_shared/Input/TextInput";
import TextArea from "@/_shared/Input/TextArea";
import Button from "@/_shared/Button";

import airBase from "@/setups/airtable";

import styles from "./connect.module.scss";

const ConnectForm = ({ data, setData }) => {
  const saveConnectForm = () => {

    airBase("clients").create([{ fields: data }], (err, records) => {
      console.log(err, records);

      if (err) {
        console.log(err);
        return;
      }

      records.forEach((record) => {
        console.log("-->", record);
      });
    });
  };

  console.log(data);

  return (
    <div className={styles["connect-form-ctr"]}>
      <h2> Request a Callback </h2>
      <br />
      <TextInput
        placeholder="Name *"
        value={data.name}
        setValue={(name) => setData({ ...data, name })}
      />
      <br />
      <TextInput
        placeholder="Email *"
        value={data.email}
        setValue={(email) => setData({ ...data, email })}
      />
      <br />
      <TextInput
        placeholder="Phone *"
        value={data.phone}
        setValue={(phone) => setData({ ...data, phone })}
      />
      <br />
      <TextArea
        placeholder="Your Message *"
        value={data.message}
        setValue={(message) => setData({ ...data, message })}
      />
      <br />
      <TextInput
        placeholder="Any links to files or websites?"
        value={data.links}
        setValue={(links) => setData({ ...data, links })}
      />
      <br /> <br />
      <Button name="Connect" action={saveConnectForm} />
    </div>
  );
};

const Connect = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    links: "",
  });

  return (
    <>
      <Head>
        <title>Connect | Devish </title>
      </Head>
      <Header />

      <div className={styles["connect-ctr"]}>
        <ConnectForm data={data} setData={setData} />
        <div className={styles["contact-info"]}></div>
      </div>

      <br />
    </>
  );
};

export default Connect;
