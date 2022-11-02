import { Text, View, Button, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontFamily: 'NotoSans', fontWeight: "bold", color: "grey", marginLeft: 15, marginTop: 10}}>
        Good { getGreeting() }, Johnny!
      </Text>
      <Text style={{ fontSize: 24, fontFamily: 'NotoSans', marginLeft: 15 }}>
        Your Character Summary
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Character</DataTable.Title>
          <DataTable.Title>Rank</DataTable.Title>
          <DataTable.Title>Last Played</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>UR</DataTable.Cell>
          <DataTable.Cell>3</DataTable.Cell>
          <DataTable.Cell>Oct. 28th, 2022</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>RY</DataTable.Cell>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>Oct. 27th, 2022</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>KE</DataTable.Cell>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>Oct. 26th, 2022</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>YA</DataTable.Cell>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>Oct. 26th, 2022</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>SE</DataTable.Cell>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>Sep. 28th, 2022</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <TouchableOpacity style={{margin: 15, backgroundColor: "#ddd", padding: 10, }}>
        <Text style={{textAlign: "center"}}>Load more</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontFamily: 'NotoSans', marginLeft: 15 }}>
        Upcoming Local Events
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{flex: 2}}>Event</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 2}}>ArtcadeDFW</DataTable.Cell>
          <DataTable.Cell>Nov. 1st, 2022</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 2}}>ArtcadeDFW Monthly</DataTable.Cell>
          <DataTable.Cell>Nov. 12th, 2022</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 2}}>3S Monthly (FPA)</DataTable.Cell>
          <DataTable.Cell>Nov. 20th, 2022</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 2}}>3S Monthly (FPA)</DataTable.Cell>
          <DataTable.Cell>Dec. 18th, 2022</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 2}}>Take Mi Amor Alex on a Date</DataTable.Cell>
          <DataTable.Cell>Jan. 1st, 2023</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{flex: 2}}>Mi Amor Alex Anniversary 🥰</DataTable.Cell>
          <DataTable.Cell>Feb. 18th, 2023</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      {/* <Button title="Test" onPress={ () => navigation.navigate('TestNavigation') } />
      <MaterialCommunityIcons name="home" size={24} color="black" /> */}
    </ScrollView>
  );
}

export function TestNavigation({ navigation }) {
  return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 30 }}>This is another Test Screen</Text>
      </View>
  );
}

function getGreeting() {
  var greetingTime = new Date();
  var time = greetingTime.getHours();
  var greeting = null;

  if (time > 6 && time < 12) {
    greeting = "morning";
  } else if (time > 12 && time < 18) {
    greeting = "afternoon";
  } else {
    greeting = "evening";
  }

  return greeting;
}