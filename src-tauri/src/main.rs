// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
#[tauri::command]
fn close() {
    format!("click the close window button");
    print!("Rust print")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, close])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
