import {
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
} from "react-native";

export default function TodoScreen({ navigation }) {
  // lista fixa
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    console.log(task);
  };

  const TaskList = [
    { id: "1", text: "Jogar Truco com os amigos", completed: false },
    { id: "2", text: "Academia às 18h", completed: true },
    { id: "3", text: "Estudar React Native", completed: true},
  ];
  
  // função apenas visual para redenrizar cada item
  const renderTodoItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.taskTextContainer}>
        <View style={[styles.circle, item.completed && styles.circleCompleted]}>
          {item.completed && <Text style={styles.checkMark}>✓</Text>}
          <Text style={styles.checkMark}></Text>
        </View>

        <Text
          style={[styles.taskText, item.completed && styles.taskTextCompleted]}
        >
          {item.text}
        </Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Minha Lista de Tarefas</Text>
        <Text style={styles.subtitle}>1 tarefa pendente</Text>
      </View>
      <FlatList
        data={TaskList}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}

      ListEmptyComponent={
          <Text style=  {styles.emptyText}>
            Nenhuma tarefa encontrada. Aproveite para relaxar ou adicionar novas tarefas!
          </Text>
        }
      />

      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Adicionar nova tarefa"
        placeholderTextColor="#999" value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  taskTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#0066cc",
    alignItems: "center",
    marginRight: 12,
  },
  circleCompleted: {
    backgroundColor: "#0066cc",
    borderColor: "#0066cc",
  },
  taskText: {
    fontSize: 16,
    color: "#1a1c1e",
    flex: 1,
  },
  taskTextCompleted: {
    textDecorationLine: "line-through",
    color: '#999',
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    paddingTop: 60,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1c1e",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6c727f",
    marginTop: 4,
  },
  checkMark: {
    color: "#ffffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  inputContainer: {
    position: "absolute",
    bottom: 34,
    left: 24,
    right: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 52,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#1a1c1e",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 4,
  },
  addButton: {
    width: 52,
    height: 52,
    backgroundColor: "#0066cc",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "300",
  },

  emptyText: {
    fontSize: 20,
    color: "#001affff",
    textAlign: "center",
    flexDirection: "column",
    fontWeight: "bold",
    marginTop: 40,

  }
});
