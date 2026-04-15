import { StyleSheet } from "react-native";

export const styleApp = StyleSheet.create({
  image: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  header: {
    gap: 10,
    marginBottom: 14,
  },

  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderWidth: 1.5,
    borderColor: "#2563eb",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 6,
    marginBottom: 6,
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
    paddingVertical: 2,
    backgroundColor: "transparent",
  },

  searchIcon: {
    marginRight: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },

  body: {
    flex: 1,
    backgroundColor: "rgba(59, 130, 246, 0.18)", // couleur du body
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.45)",
    borderRadius: 14,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  bodyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    backgroundColor: "rgba(223, 169, 23, 0.75)",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginTop: 14,
    alignItems: "center",
  },

  footer: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.75)",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  footerItem: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
});
