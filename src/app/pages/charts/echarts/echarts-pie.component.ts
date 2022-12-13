import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "ngx-echarts-pie",
  template: ` <div echarts [options]="options" class="echart"></div> `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: "Console Errors",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            data: [
              {
                value: 84,
                name: "ERROR Error: An unexpected server error occurred.,Error: An unexpected server error occurred. at throwException ( at MergeMapSubscriber.project ( at MergeMapSubscriber.value ( at MergeMapSubscriber.value ( at MergeMapSubscriber.value ( at Observable._subscribe ( at Observable.value ( at Observable...",
              },
              {
                value: 78,
                name: "ERROR SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON,SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON at JSON.parse (<anonymous>) at MergeMapSubscriber.project ( at MergeMapSubscriber.value ( at MergeMapSubscriber.value ( at MergeMapSubscriber.value ( at rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable.reader.onload ( at ZoneDelegate.invoke ( at Obj...",
              },
              {
                value: 78,
                name: "ERROR SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON,SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON at JSON.parse (<anonymous>) at MergeMapSubscriber.project ( at MergeMapSubscriber.value ( at MergeMapSubscriber.value ( at MergeMapSubscriber.value ( at rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable.reader.onload ( at ZoneDelegate.invoke ( at Object..."
              },
              {
                value: 70,
                name: "TypeError: Cannot read properties of undefined (reading 'length') at  at  at  at Scope.$eval ( at Scope.$digest ( at Scope.$apply ( at done ( at completeRequest ( at xhr.onload [as __zone_symbol__ON_P..."
              },
              {
                value: 69,
                name: "TypeError: preferences.map is not a function at UserPreferencesDataRepository.convetPreferencesToAppConfigurations ( at  at  at  at Scope.$eval ( at Scope.$digest ( at Scope.$apply ( at done ( ..."
              },
              {
                value: 64,
                name: "Cannot ensure login. undefined"
              },
              {
                value: 27,
                name: "Cannot ensure login. [object Object]"
              },
              {
                value: 25,
                name: "ERROR Error: An unexpected server error occurred.,Error: An unexpected server error occurred. at throwException ( at MergeMapSubscriber.project ( at MergeMapSubscriber.value ( at MergeMapSubscriber.value ( at MergeMapSubscriber.value ( at Observable._subscribe ( at Observable.value ( at Obse..."

              },
              {
                value: 14,
                name: "TypeError: Cannot read properties of undefined (reading 'isFutureDateAllowed') at DateRangeFilterComponent.buildConfig ( at DateRangeFilterComponent.ngOnInit ( at callHook ( at callHooks ( at executeInitAndCheckHooks ( at refreshView ( at  at refreshView (" 
              },
              {
                value: 14,
                name: "ERROR Error: Uncaught (in promise): TypeError: Cannot read properties of undefined (reading 'isFutureDateAllowed') TypeError: Cannot read properties of undefined (reading 'isFutureDateAllowed') at DateRangeFilterComponent.buildConfig ( at DateRangeFilterComponent.ngOnInit ( at callHook ( at callHooks ( at executeInitAndCheckHooks ( at refreshView ( at "
              },
              {
                value: 7,
                name: "{\"data\":\"undefined\",\"status\":500}"
              }
              ,
              {
                value: 6,
                name: "ERROR {\"data\":\"undefined\",\"status\":500}"
              }
              ,
              {
                value: 5,
                name: "ERROR TypeError: Cannot read properties of undefined (reading 'buttonText'),TypeError: Cannot read properties of undefined (reading 'buttonText') at NgxVrAlertPanelComponent.get ( at template ( at executeTemplate ( at refreshView ( at refreshComponent ( at "
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
