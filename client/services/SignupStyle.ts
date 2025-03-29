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