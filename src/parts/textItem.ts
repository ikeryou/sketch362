import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Rect } from "../libs/rect";
import { Util } from "../libs/util";
import { Color } from 'three/src/math/Color';

// -----------------------------------------
//
// -----------------------------------------
export class TextItem extends MyDisplay {

  private _inner: HTMLElement;
  public get inner(): HTMLElement {
    return this._inner;
  }

  private _innerPos: Rect = new Rect();
  public get innerPos(): Rect {
    return this._innerPos;
  }

  private _pos: Rect = new Rect();
  public get pos(): Rect {
    return this._pos;
  }

  private _offsetPos: Rect = new Rect();
  // private _scale: number = 1;
  // private _ease: number = 0.1;


  constructor(opt:any) {
    super(opt)

    Tween.set(this.el, {
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden',
    });

    this._inner = this.el.querySelector('textarea') as HTMLElement;
    this._inner.classList.remove('js-text-org');
    this._inner.classList.add('js-text-item-inner');
    Tween.set(this._inner, {
      position: 'absolute',
      top: 0,
      left: 0,
    })

    const col = new Color(Util.random(0, 1), Util.random(0, 1), Util.random(0, 1));
    const bgCol = new Color(Util.random(0, 1), Util.random(0, 1), Util.random(0, 1));

    if(Util.hit(2)) {
      Tween.set(this._inner, {
        color: col.getStyle(),
      })
    }
    if(Util.hit(2)) {
      Tween.set(this._inner, {
        backgroundColor: bgCol.getStyle()
      })
    }

    if(Util.hit(4)) {
      this._inner.classList.add('-effect')
    }

    this.useGPU(this._inner);
    this.useGPU(this.el);
  }


  protected _update(): void {
    super._update();

    // const mx = MousePointer.instance.x;
    // const my = MousePointer.instance.y;

    // const dx = mx - this._pos.x;
    // const dy = my - this._pos.y;
    // const d = Math.sqrt(dx * dx + dy * dy);

    // const dr = Util.map(d, 1, 0, 0, this._pos.width * Func.val(1.5, 2));
    // const range = this._pos.width * 0.012 * Func.val(3, 1);

    // const tgX = range * dr * dx * -1
    // const tgY = range * dr * dy * -1
    // this._offsetPos.x += (tgX - this._offsetPos.x) * this._ease;
    // this._offsetPos.y += (tgY - this._offsetPos.y) * this._ease;

    // this._scale += (Util.map(dr, 1, 0, 0, 1) - this._scale) * this._ease;

    Tween.set(this._inner, {
      x: this._innerPos.x + this._offsetPos.x * 0,
      y: this._innerPos.y + this._offsetPos.y * 0,
      // scale: this._scale,
    })
  }

  protected _resize(): void {
    super._resize();
  }
}