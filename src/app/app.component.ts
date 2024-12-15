import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare const PitchPrintClient: any; // Declare the SDK globally if not using a module system

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'printweet-picth-print';
  isLaunchDisabled = true; // Initially disable the launch button

  ngOnInit(): void {
    const launchButton = document.getElementById('launch_btn') as HTMLButtonElement | null;
    const previewDiv = document.getElementById('pp_preview_div') as HTMLElement | null;
    const loaderDiv = document.getElementById('pp_loader_div') as HTMLElement | null;

    if (!launchButton || !previewDiv || !loaderDiv) {
      console.error('Required elements are missing from the DOM.');
      return;
    }

    // Initialize PitchPrint Client
    const ppclient = new PitchPrintClient({
      apiKey: 'key123Dummy', // Replace with your API Key
      designId: 'bed81027a6c31c8ca1e84372247009fa',    // Replace with your Design ID
      custom: false,
      isvx: false,
    });

    // App validated callback
    const appValidated = () => {
      this.isLaunchDisabled = false; // Enable the launch button
      launchButton.onclick = () => ppclient.showApp(); // Show the designer on click
      loaderDiv.style.display = 'none'; // Hide the loader
    };

    // Project saved callback
    const projectSaved = (_val: any) => {
      const data = _val.data;
      if (data && data.previews && data.previews.length) {
        previewDiv.innerHTML = data.previews.reduce(
          (str: string, prev: string) => `${str}<img src="${prev}">`,
          ''
        );
      }
    };

    // Attach event listeners
    ppclient.on('app-validated', appValidated);
    ppclient.on('project-saved', projectSaved);
  }

}
