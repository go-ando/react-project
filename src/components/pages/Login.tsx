import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { UseAuth } from "../../hooks/UseAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  const { login, loading } = UseAuth();
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const OnClickLogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={16}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={OnClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
