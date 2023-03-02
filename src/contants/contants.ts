type Option = {
  value: string | number;
  label: string;
  children?: Option[];
};

export const options: Option[] = [
  {
    value: "hanoi",
    label: "Hà Nội",
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
