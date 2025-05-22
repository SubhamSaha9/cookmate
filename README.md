<h2 align="center">Bolt.Clone - A Website that make website</h2>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🤸 [Quick Start](#quick-start)
3. 🕸️ [Config Files](#config-files)
4. 🚀 [More](#more)

## <a name="tech-stack">⚙️ Tech Stack</a>

- MongoDB
- Express
- React Native
- Expo
- Redux Toolkit(RTK)
- Node
- TypeScript

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/SubhamSaha9/cookmate.git
cd cookmate
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
#or
npm i
```

**Set Up Environment Variables**

Create two new file named `.env` in client and server folder of your project and add the following content:

- client

```env
EXPO_PUBLIC_API_URL=""
EXPO_PUBLIC_GEMINI_API_KEY=""
EXPO_PUBLIC_AIGURULAB_API_KEY=""
EXPO_PUBLIC_AIGURULAB_API_URL=https://aigurulab.tech
```

- server

```env
MONGO_URI=""
JWT_SECRET= ""
ORIGIN=""

CLOUD_NAME=""
CLOUD_API_KEY=""
CLOUD_API_SECRET=""
FOLDER_NAME="cookmate"

API_URL=""
```

Replace the values with your actual credentials from [MongoDB](https://www.mongodb.com), [Cloudinary](https://cloudinary.com), [Gemini](https://aistudio.google.com), and [AI Gurulab](https://aigurulab.tech).

**Running the Project**

- server

```bash
npm run dev
```

- client

```bash
npm run start
```

Follow the instruction in the client side terminal to run the application. If you'r using simulator the backend will work, if using EXPO Go application then deploy the backend first.

## <a name="config-files">🕸️ Config Files</a>

<details>
<summary><code>Colors.ts</code></summary>

```typescript
export const COLORS = {
  PRIMARY: "#299446",
  SECONDARY: "#e8f5e9",
  WHITE: "#ffffff",
  GRAY: "gray",
  PLACEHOLDERTEXT: "#767676",
  INPUTBACKGROUND: "#f4faf5",
  BORDER: "#c8e6c9",
  BLACK: "#000000",
};

export const LoginColors = {
  primary: "#299446",
  textPrimary: "#2e5a2e",
  textSecondary: "#688f68",
  textDark: "#1b361b",
  placeholderText: "#767676",
  background: "#e8f5e9",
  cardBackground: "#f1f8f2",
  inputBackground: "#f4faf5",
  border: "#c8e6c9",
  white: "#ffffff",
  black: "#000000",
};
```

</details>

<details>
<summary><code>LoginStyle.ts</code></summary>

```typescript
import { StyleSheet, Dimensions } from "react-native";
import { LoginColors } from "./Colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: LoginColors.background,
    padding: 20,
    justifyContent: "center",
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: LoginColors.background,
  },
  topIllustration: {
    alignItems: "center",
    width: "100%",
  },
  illustrationImage: {
    width: width * 0.65,
    height: width * 0.65,
  },
  card: {
    backgroundColor: LoginColors.cardBackground,
    borderRadius: 16,
    padding: 24,
    shadowColor: LoginColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: LoginColors.border,
    marginTop: -24,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: LoginColors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: LoginColors.textSecondary,
    textAlign: "center",
  },
  formContainer: {
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: LoginColors.textPrimary,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: LoginColors.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: LoginColors.border,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 48,
    color: LoginColors.textDark,
  },
  eyeIcon: {
    padding: 8,
  },
  button: {
    backgroundColor: LoginColors.primary,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: LoginColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: LoginColors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: LoginColors.textSecondary,
    marginRight: 5,
  },
  link: {
    color: LoginColors.primary,
    fontWeight: "600",
  },
});

export default styles;
```

</details>
<details>

<summary><code>ProfileStyle.ts</code></summary>

```typescript
import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: "100%",
    padding: 25,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 30,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 99,
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  username: {
    fontFamily: "outfit-bold",
    fontSize: 24,
    marginTop: 8,
  },
  email: {
    fontFamily: "outfit",
    fontSize: 17,
    color: COLORS.GRAY,
  },
  listcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: COLORS.SECONDARY,
    marginBottom: 10,
    borderRadius: 99,
  },
  listimage: {
    height: 40,
    width: 40,
  },
  listtext: {
    fontFamily: "outfit",
    fontSize: 18,
  },
});

export default styles;
```

</details>
<details>
<summary><code>RecipeIngredientStyle.ts</code></summary>

```typescript
import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const styles = StyleSheet.create({
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
  itemLen: {
    fontFamily: "outfit",
    fontSize: 15,
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 7,
  },
  listIcon: {
    fontSize: 22,
    padding: 5,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 99,
    height: 38,
    width: 38,
    textAlign: "center",
  },
  listText: {
    fontFamily: "outfit",
    fontSize: 17,
  },
  listQt: {
    fontFamily: "outfit",
    fontSize: 17,
    color: COLORS.GRAY,
  },
});

export default styles;
```

</details>

<details>
<summary><code>RecipeStepsStyle.ts</code></summary>

```typescript
import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 0.3,
  },

  listIdx: {
    fontFamily: "outfit",
    fontSize: 17,
    padding: 10,
    width: 38,
    textAlign: "center",
    borderRadius: 7,
    backgroundColor: COLORS.SECONDARY,
  },
  listText: {
    fontFamily: "outfit",
    fontSize: 17,
    flex: 1,
  },
});

export default styles;
```

</details>

<details>
<summary><code>SignupStyle.ts</code></summary>

```typescript
import { StyleSheet } from "react-native";
import { LoginColors } from "./Colors";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: LoginColors.background,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: LoginColors.cardBackground,
    borderRadius: 16,
    padding: 24,
    shadowColor: LoginColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: LoginColors.border,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "JetBrainsMono-Medium",
    color: LoginColors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: LoginColors.textSecondary,
    textAlign: "center",
  },
  formContainer: { marginBottom: 16 },
  inputGroup: { marginBottom: 20 },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: LoginColors.textPrimary,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: LoginColors.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: LoginColors.border,
    paddingHorizontal: 12,
  },
  inputIcon: { marginRight: 10 },
  input: {
    flex: 1,
    height: 48,
    color: LoginColors.textDark,
  },
  eyeIcon: { padding: 8 },
  button: {
    backgroundColor: LoginColors.primary,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: LoginColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: LoginColors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: LoginColors.textSecondary,
    marginRight: 5,
  },
  link: {
    color: LoginColors.primary,
    fontWeight: "600",
  },
});

export default styles;
```

</details>

<details>
<summary><code>prompt.ts</code></summary>

```typescript
export default {
  GENERATE_RECIPE_OPTION_PROMPT: `:Depends on user instruction create 3 different Recipe variant with Recipe Name with Emoji,
    2 line description and main ingredient list in JSON format with field recipeName, description, ingredients (without size) only`,
  GENERATE_COMPLETE_RECIPE_PROMPT: `
    - As per recipe Name and Description, Give me all list of ingredients as ingredient ,
    - emoji icons for each ingredient as icon, quantity as quantity, along with detail step by step recipe as steps
    - Total Calories as calories (only number), Minutes to cook as cookTime and serving number as serveTo
    - relastic image Text prompt as per reciepe as imagePrompt
    - Give me category List for recipe from [Breakfast, Lunch, Dinner, Chinese, Healthy, Fast Food, Dessert, Custard, Drinks, Paneer, Biryani, South Indian] as category
    - Give me response in JSON format only`,
};
```

</details>

## <a name="more">🚀 More</a>

For more such projects visit my [Github](https://github.com/SubhamSaha9?tab=repositories) page.
