import React from "react";
import { Cascader } from "antd";

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: "hanoi",
    label: "Ha Noi",
    children: [
      {
        value: "hoankiem",
        label: "Hoàn Kiếm",
        children: [
          {
            value: "hangma",
            label: "Hàng Mã",
          },
          {
            value: "hangbong",
            label: "Hàng Bông",
          },
        ],
      },
    ],
  },
  {
    value: "tphcm",
    label: "TP.HCM",
    children: [
      {
        value: "quanmot",
        label: "Quận 1",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
      {
        value: "quanhai",
        label: "Quận 2",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const onChange: any = (value: string[]) => {
  console.log(value);
};

const CasCader: React.FC = () => (
  <Cascader options={options} onChange={onChange} placeholder="Please select" />
);

export default CasCader;
