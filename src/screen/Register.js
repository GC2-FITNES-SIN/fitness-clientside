import React, { useState } from "react";
import { Button, Container, ContainerFlexSameFlex, TextCustom, TextInput } from "./Styled";
import { SafeAreaView, Modal, View, TouchableOpacity } from "react-native";

const Register = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const genderOptions = ["Male", "Female", "Other"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container $padding={"15px"} $backgroundColor={"#1b1b1d"}>
        <ContainerFlexSameFlex $column $justifyContent={"flex-end"}>
          <TextCustom $fontSize={"20px"} $color={"white"}>
            Hey there,
          </TextCustom>
          <TextCustom $fontWeight={"700"} $fontSize={"20px"} $color={"white"}>
            Create an Account
          </TextCustom>
        </ContainerFlexSameFlex>
        <ContainerFlexSameFlex $column $gap={"15px"} $justifyContent={"center"} $padding={"30px 10px 10px 10px"} $flex={"4"}>
          <TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Username" $fontSize={"12px"} $color={"#000"} />
          <TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Email" $fontSize={"12px"} $color={"#000"} />
          <TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Password" $fontSize={"12px"} $color={"#000"} />
          <TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Weight" $fontSize={"12px"} $color={"#000"} />
          <TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Height" $fontSize={"12px"} $color={"#000"} />
          <TextInput $backgroundColor={"#F7F8F8"} $borderRadius={"14px"} $height={"48px"} placeholder="Age" $fontSize={"12px"} $color={"#000"} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={{ backgroundColor: "#F7F8F8", borderRadius: 14, height: 48, justifyContent: "center" }}>
              <TextCustom $fontSize={"12px"} $width={"342px"} $color={"#686868"}>{selectedGender || "Select Gender"}</TextCustom>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
              <View style={{ backgroundColor: "#FFFFFF", borderRadius: 14, padding: 20, width: 100, gap: 10 }}>
                {genderOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedGender(option);
                      setModalVisible(false);
                    }}
                  >
                    <TextCustom $fontSize={"14px"} $color={"#686868"}>{option}</TextCustom>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
        </ContainerFlexSameFlex>
        <ContainerFlexSameFlex $column $gap={"10px"} $justifyContent={"center"}>
          <Button $backgroundColor={"#bd54eb"} $height={"60px"} $borderRadius={"99px"} $padding={"20px 0px 0px 0px"}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 22,
              elevation: 3,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <TextCustom $fontWeight={"700"} $fontSize={"16px"} $color={"#FFFFFF"}>
              Register
            </TextCustom>
          </Button>
          <TextCustom $fontSize={"14px"} $color={"white"}>
            Already have an account? Login
          </TextCustom>
        </ContainerFlexSameFlex>
      </Container>
    </SafeAreaView>
  );
};

export default Register;
