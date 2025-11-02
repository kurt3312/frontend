import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";

export default function UserListPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://192.168.100.14:8000/api/users/"); // replace with your backend IP
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching users:", error.response?.data || error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text>Username: {item.username}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 30 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  userCard: { padding: 15, marginBottom: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
