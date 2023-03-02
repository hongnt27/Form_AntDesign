import React, { useState } from "react";
import { Button, Cascader, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import {
  LockOutlined,
  UserOutlined,
  RightCircleFilled,
} from "@ant-design/icons";
import { options } from "../contants/contants";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
        style={{ marginBottom: "10px", fontSize: "large" }}
      >
        Form disabled
      </Checkbox>
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 30 }}
        style={{ width: "100%" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        disabled={componentDisabled}
        labelAlign="left"
      >
        <FormItemStyled
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please input your username!" },
            { min: 5 },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} />
        </FormItemStyled>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true },
            { min: 6 },
            { max: 16 },
            {
              validator(_, value) {
                return !value ||
                  (value.match(/[a-zA-z]/) &&
                    value.match(/\d/) &&
                    value.match(/[^a-zA-Z\d]/))
                  ? Promise.resolve()
                  : Promise.reject(
                      "Password contains at least one uppercase letter and one special character and one number"
                    );
              },
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name="confirmpassword"
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                return !value || getFieldValue("password") === value
                  ? Promise.resolve()
                  : Promise.reject(
                      "The two passwords that you entered does not match"
                    );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { min: 5 },
            { max: 16 },
            { type: "email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address" rules={[{ required: true }]}>
          <Cascader options={options} />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
          rules={[
            {
              required: true,
            },
            {
              validator(_, value) {
                return value
                  ? Promise.resolve()
                  : Promise.reject("You need to agree to our terms to login.");
              },
            },
          ]}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to={"/useform"} style={{ textDecoration: "none" }}>
        Next to useForm
        <RightCircleFilled
          style={{ fontSize: "large", color: "green", padding: "5px 0 0 5px" }}
        />
      </Link>
    </>
  );
};
const FormItemStyled = styled(Form.Item)`
  width: 100%;
  text-algin: start;
  padding: 0;
`;
export default Login;
