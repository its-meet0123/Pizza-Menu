import Typography from "antd/es/typography/Typography";
import CreateUser from "../user/CreateUser";
import { Flex } from "antd";
const { Title, Text, Link } = Typography;
export default function Home() {
  return (
    <>
      <Title level={2} type="warning">
        The best pizza
      </Title>
      <Text italic>Straight out of the oven straight to you</Text>
    </>
  );
}
